import React, { useState } from "react";
import Image from "next/legacy/image";
// import "./dialogflow.css";
// import chat from "../../assets/icons/chat.png";
function ChatBot() {
	const [chatOpen, setChatOpen] = useState(false);
	const [chatHistory, setChatHistory] = useState([]);
	const [queryText, setQueryText] = useState("");

	function clickButton() {
		fetch("https://icacs-dialogflow.onrender.com/dialogflow", {
			method: "POST",
			body: JSON.stringify({
				queryText: queryText,
				sessionId: "abcd1234",
				languageCode: "en",
			}),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((r) => r.json())
			.then((r) => {
				if (r && r.message) {
					setChatHistory((prevChat) => [
						...prevChat,
						{ message: r.message, from: "bot" },
					]);
				}
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}

	function toggleChat() {
		setChatOpen((prevChatOpen) => !prevChatOpen);
	}

	function handleInputChange(event) {
		setQueryText(event.target.value);
	}

	function handleSend() {
		clickButton();
		setChatHistory((prevChat) => [
			...prevChat,
			{ message: queryText, from: "user" },
		]);
		setQueryText("");
	}

	function handleInputKeyPress(event) {
		if (event.key === "Enter") {
			handleSend();
		}
	}
	return (
		<>
			<style jsx>{`
				.chatbot-container {
					position: fixed;
					bottom: 20px;
					right: 20px;
					z-index: 9999;
				}

				.chat-icon {
					width: 60px;
					height: 60px;
					background-color: var(--color-primary);
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
					cursor: pointer;
					box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
					transition: background-color 0.3s ease;
				}

				.chat-icon img {
					width: 30px;
					height: 30px;
				}

				.chat-icon:hover {
					background-color: var(--color-primary-light);
				}

				.chat-panel {
					position: absolute;
					bottom: 80px;
					right: 20px;
					width: 300px;
					max-height: 400px;
					background-color: #fff;
					border-radius: 5px;
					box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
					overflow-y: auto;
					display: flex;
					flex-direction: column;
					padding: 10px;
				}

				.chat-history {
					flex: 1;
				}

				.message {
					margin: 5px;
					padding: 8px 12px;
					border-radius: 5px;
				}

				.from-bot {
					background-color: #f0f0f0;
				}

				.from-user {
					background-color: var(--color-primary);
					color: #fff;
				}

				.input-container {
					display: flex;
					margin-top: 10px;
				}

				.input-container input {
					flex: 1;
					padding: 8px;
					border: 1px solid #ccc;
					border-radius: 5px;
					outline: none;
				}

				.input-container button {
					padding: 8px 12px;
					margin-left: 5px;
					border: none;
					background-color: var(--color-primary);
					color: #fff;
					border-radius: 5px;
					cursor: pointer;
					transition: background-color 0.3s ease;
				}

				.input-container button:hover {
					background-color: var(--color-primary-light);
				}
			`}</style>
			<div className="chatbot-container">
				<div className="chat-icon" onClick={toggleChat}>
					<Image
						src="/assets/icons/chat.png"
						alt="image"
						width={50}
						height={50}
					></Image>
				</div>
				{chatOpen && (
					<div className="chat-panel">
						<div className="chat-history">
							{chatHistory.map((chat, index) => (
								<div
									key={index}
									className={`message ${
										chat.from === "bot" ? "from-bot" : "from-user"
									}`}
								>
									{chat.message}
								</div>
							))}
						</div>
						<div className="input-container">
							<input
								type="text"
								value={queryText}
								onChange={handleInputChange}
								onKeyPress={handleInputKeyPress}
								placeholder="Type your message..."
							/>
							<button onClick={handleSend}>Send</button>
						</div>
					</div>
				)}
			</div>
		</>
	);
}

export default ChatBot;
