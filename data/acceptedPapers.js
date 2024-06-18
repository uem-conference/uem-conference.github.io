const acceptedPapers = [
  {
    paperID: 4,
    title:
      "GWOSCAPSO : A hybrid GWO-SCA-PSO algorithm for solving optimization problems",
    authors: ["Barnam Jyoti Saharia", "Dimpy Mala Dutta", "Nabin Sarmah"],
    correspondingAuthor: "Barnam Jyoti Saharia",
  },
  {
    paperID: 88,
    title: "Advanced Roadway Collision Detection System",
    authors: [
      "Dr. S. Rama Devi",
      "P. Siva Priya",
      "S.P.C.L. Pravallika",
      "S. Pujitha",
      "M. Kanyala",
      "K. Gayatri Sriya",
      "K. Saritha",
    ],
    correspondingAuthor: "Dr. S. Rama Devi",
  },
  {
    paperID: 177,
    title: "Optimizing Non-rigid Demons Registration using Bat Algorithm",
    authors: [
      "Abhisek Roy",
      "Pranab Kanti Roy",
      "Anirban Mitra",
      "Sraddha Roy Choudhury",
      "Sayan Chakraborty",
    ],
    correspondingAuthor: "Abhisek Roy",
  },
  {
    paperID: 89,
    title:
      "A new method for improving accuracy in Attendance System with Facial Recognition",
    authors: [
      "Gaurav Chakraborty",
      "Ekak Basu",
      "Manvendra Patel",
      "Akash Raj",
      "Papri Ghosh",
      "Pushpita Roy",
      "Subhram Das",
    ],
    correspondingAuthor: "Gaurav Chakraborty",
  },
  {
    paperID: 60,
    title:
      "A systematic literature review in Web of Science of generative models in the area of education",
    authors: [
      "Juan Luis Cabanillas-García",
      "María Cruz Sánchez-Gómez",
      "Irene del Brío-Alonso",
    ],
    correspondingAuthor: "Juan Luis Cabanillas García",
  },
  {
    paperID: 108,
    title:
      "Prediction of Long-Lasting Disease using Machine Learning and Explainable AI",
    authors: [
      "Mohammad Riyaz Belgaum",
      "Ambati Devendra Kumar",
      "Addugala Dhilip Kumar Reddy",
      "Kashapogu Dinesh Kumar",
    ],
    correspondingAuthor: "Ambati Devendra Kumar",
  },
  {
    paperID: 56,
    title: "Offline Signature Verification Using Ensemble Learning",
    authors: [
      "Avijit Bose",
      "Aniket Paul",
      "Debanjan Bhattacharjee",
      "Tusharika Mandal",
      "Rene Ghosh",
      "Dipannita Ghosh Sneha",
      "Satyajit Chakrabarti",
    ],
    correspondingAuthor: "Aniket Paul",
  },
  {
    paperID: 75,
    title:
      "A Comparative Analysis for Rainfall Prediction: Efficient Transfer Learning Approach",
    authors: [
      "Sanjukta Mishra",
      "Parag Kumar Guha Thakurta",
      "Monalisa Dutta",
      "Dipta Banik",
      "Kamalika Bhowal",
    ],
    correspondingAuthor: "Sanjukta Mishra",
  },
  {
    paperID: 155,
    title:
      "IMPORTANCE OF URBAN FORESTS FOR MAINTAINING THE ECOLOGICAL-ECONOMIC LINKAGES OF ENVIRONMENT: A CASE STUDY ON PURULIA TOWN, WEST BENGAL, INDIA",
    authors: ["Arpita Chaudhury Aich", "Samir Pramanik", "Bela Das"],
    correspondingAuthor: "Arpita Chaudhury Aich",
  },
  {
    paperID: 102,
    title:
      "Unlocking the Heart: Precision Analytics and Advanced Insights Redefining Cardiovascular Wellness",
    authors: [
      "Shreya Adak",
      "Chandrima Chakrabarti",
      "Ananya Banerjee",
      "Christina Hira",
      "Sanandita Biswas",
      "Srinjoy Roychowdhury",
    ],
    correspondingAuthor: "Christina Hira",
  },
  {
    paperID: 43,
    title:
      "MIXNet: A Deep Model for Cancer Type Identification from CT-Scan Images",
    authors: ["Debam Saha", "Sourajit Maity", "Subhankar Guha"],
    correspondingAuthor: "Sourajit Maity",
  },
  {
    paperID: 169,
    title:
      "Chemometric Analysis of Citronellal in Different Citronella Essential Oils Employing Quartz Crystal Microbalance Sensor",
    authors: [
      "Sumit Kundu",
      "Deepam Gangopadhyay",
      "Mahuya Bhattacharyya Banerjee",
      "Shreya Nag",
      "Runu Banerjee Roy",
    ],
    correspondingAuthor: "Runu Banerjee Roy",
  },
  {
    paperID: 24,
    title:
      "Analysis and Comparison Study of Cardiovascular Risk Prediction using Machine Learning Approaches",
    authors: [
      "Sudipta Hazra",
      "Siddhartha Chatterjee",
      "Rituparna Mondal",
      "Anwesa Naskar",
    ],
    correspondingAuthor: "Sudipta Hazra",
  },
  {
    paperID: 158,
    title:
      "Performance Analysis of Different CNN Architecture for KOA Classification into KL Grading System using X-ray Images.",
    authors: [
      "Prema T. Akkasaligar",
      "Santosh Pattar",
      "Atharva Rasane",
      "Gulshan Kumar",
      "Ramchandra Gawas",
    ],
    correspondingAuthor: "Prema T. Akkasaligar",
  },
  {
    paperID: 13,
    title: "An Evolutionary Approach for Layered Neural Architecture Search",
    authors: ["Sutanu Paul", "Shouvik Chakraborty", "Chinmoy Ghorai"],
    correspondingAuthor: "Sutanu Paul",
  },
  {
    paperID: 113,
    title:
      "Assessing the Spatio-temporal Trends and Clustering of the Brick Kiln Industry and its Impact on Agricultural Land Degradation in West Bengal: Using a GIS and Statistical Technique-based Approach",
    authors: ["Mantu Paira", "Bela Das"],
    correspondingAuthor: "Mantu Paira",
  },
  {
    paperID: 95,
    title:
      "Classification of Skin Cancer Using Modified Deep Learning Protocol",
    authors: [
      "Sayan Majumder",
      "Rohit Biswas",
      "S Jay Nitin",
      "Shibam Sinha",
      "Indrajit Mondal",
      "Aranyak Dutta",
    ],
    correspondingAuthor: "Sayan Majumder",
  },
  {
    paperID: 78,
    title:
      "Application of Convolutional Neural Network in Drowsiness Detection using Facial Features",
    authors: [
      "Khadijah Ahmed",
      "Debayan Mukhopadhyay",
      "Priyanka Banerjee",
      "Akash Mehta",
    ],
    correspondingAuthor: "Khadijah Ahmed",
  },
  {
    paperID: 74,
    title:
      "Discrimination of catechin and EGCG through various tea processing stages using clustering techniques",
    authors: [
      "Debanjana Ghosh",
      "Shreya Nag",
      "Debangana Das",
      "Runu Banerjee Roy",
    ],
    correspondingAuthor: "Debanjana Ghosh",
  },
  {
    paperID: 142,
    title:
      "Root-Cause-Failure-Analysis (RCFA): A Rule-based Chatbot to Facilitate Road Accident Investigation",
    authors: [
      "Sunita Roy",
      "Susanta Podder",
      "Ranjan Mehera",
      "Rajat Kumar Pal",
    ],
    correspondingAuthor: "Sunita Roy",
  },
  {
    paperID: 67,
    title:
      "Enhanced Advanced Deep Learning Techniques for Data Analysis in Electronic Health Records (EHR)",
    authors: ["Karthik", "D", "Arun S"],
    correspondingAuthor: "Karthik",
  },
  {
    paperID: 40,
    title:
      "Integrated Multiple Disease Prediction Model: A Machine Learning Approach for Enhanced Healthcare Decision Support",
    authors: ["Sayed Md Ashabul Yamin", "Md Junayed Hasan", "Chinmoy Ghorai"],
    correspondingAuthor: "Chinmoy Ghorai",
  },
  {
    paperID: 144,
    title:
      "Towards Scalable and Accurate Diabetic Retinopathy Screening: A Machine Learning Perspective",
    authors: ["Ritorshi Pal", "Bimal Maity", "Soumen Roy", "Sunita Roy"],
    correspondingAuthor: "Ritorshi Pal",
  },
  {
    paperID: 82,
    title: "Authentication and Data Integrity Assured Image Encryption Method",
    authors: ["Priyamathi D", "Dr.J.Selvakumar"],
    correspondingAuthor: "Dr.J.Selvakumar",
  },
  {
    paperID: 137,
    title:
      "Enhanced Electricity Demand Forecasting in Industrial Zones: A Fusion of Machine Learning and Deep Learning Approaches",
    authors: [
      "Yegireddi Ramesh",
      "GNL Bhavani",
      "S Balamani",
      "V Rajkumar",
      "M Rohith Kumar",
    ],
    correspondingAuthor: "Dr Yegireddi Ramesh",
  },
  {
    paperID: 70,
    title:
      "Secure Multipath Angular Routing Protocol (SMARP) for Underwater Wireless Sensor Networks",
    authors: ["Dr. Monjul Saikia"],
    correspondingAuthor: "Dr. Monjul Saikia",
  },
  {
    paperID: 62,
    title:
      "A Machine Learning Technique for the identification of hub protein of Gastric cancer",
    authors: [
      "Arup Mallick",
      "Atanu Kumar Das",
      "Ankit Kumar Thakur",
      "Arpita Giri",
      "Chandan prakash Gupta",
      "Nabin Ghoshal",
    ],
    correspondingAuthor: "Arup Mallick",
  },
  {
    paperID: 131,
    title: "Skin Disease Detection Using Convolutional Neural Network",
    authors: [
      "Sagar Badjate",
      "Aashish Birhade",
      "Moreshwar Borse",
      "Pushkraj Patil",
      "Shubham Wagh",
      "Mangesh Balpande",
    ],
    correspondingAuthor: "Sagar Badjate",
  },
  {
    paperID: 94,
    title:
      "Ensemble Learning to Enhance Diabetic Retinopathy Detection and Classification in Fundus Images",
    authors: ["Ms. S.G.Gawande", "Dr. A.P.Thakare"],
    correspondingAuthor: "Ms S.G.Gawande",
  },
  {
    paperID: 55,
    title:
      "Predictive Modelling of QCA Universal Gate Energy Dissipation on Single Cell Displacement Defect",
    authors: [
      "Manali Dhar",
      "Debasmita Manna",
      "Ananya Banerjee",
      "Saradindu Panda",
      "Bansibadan Maji",
    ],
    correspondingAuthor: "Manali Dhar",
  },
  {
    paperID: 163,
    title: "Malware detection using advanced algorithms",
    authors: ["Dr. Vergin Raja Sarobin M", "Ashish Choudhary", "Ranjith J."],
    correspondingAuthor: "Ashish Choudhary",
  },
  {
    paperID: 83,
    title:
      "Usability and User Experience Evaluation of a Travel Planning App Developed in Bangla Utilizing User-Centered Design Principle",
    authors: [
      "Tasnuba Badrul",
      "Faria Anjum",
      "Md. Shahim Uddin Saba",
      "Tayaba Sultana Hossain",
      "Ashraful Islam",
    ],
    correspondingAuthor: "Ashraful Islam",
  },
  {
    paperID: 44,
    title:
      "Enhancing Accommodation Discovery: A Hybrid Approach to Paying Guest Recommendation Systems",
    authors: [
      "Sayan Raha",
      "Chunnu Kumar",
      "Akashlina Ghosh",
      "Sudip Pal",
      "Subhajit Nayek",
      "Suranjana Jana",
      "Arpita Debnath",
    ],
    correspondingAuthor: "Arpita Debnath",
  },
  {
    paperID: 27,
    title: "Intelligent Web Scraping Based Question Answering Bot",
    authors: [
      "Koustav Bal",
      "Dr. Mrinmoyee Bhattacharya",
      "Dr. Tuhin Utsab Paul",
    ],
    correspondingAuthor: ["Dr. Mrinmoyee Bhattacharya", "Dr. Tuhin Utsab Paul"],
  },
  {
    paperID: 19,
    title:
      "Energy-Efficient and Cost-Effective LT Parity Generator in Quantum-dot Cellular Automata",
    authors: [
      "Ananya Banerjee",
      "Debasmita Manna",
      "Manali Dhar",
      "Dr. Saradindu Panda",
      "Dr. Bansibadan Maji",
    ],
    correspondingAuthor: "Ananya Banerjee",
  },
  {
    paperID: 160,
    title:
      "An Approach to Design an Efficient Reversible Logic-Feynman Gate Using Quantum dot Cellular Automata",
    authors: ["Debasmita Manna", "Manali Dhar"],
    correspondingAuthor: "Debasmita Manna",
  },
  {
    paperID: 145,
    title:
      "An Innovative Deep Learning based Method for Classifying Skin Cancer Using an Unbalanced Dataset",
    authors: [
      "Ananya Banerjee",
      "Saradindu Panda",
      "Bansibadan Maji",
      "Abhijit Baidya",
      "Saptarshi Chakraborty",
      "Yagnyasenee Sen Gupta",
    ],
    correspondingAuthor: "Saptarshi Chakraborty",
  },
  {
    paperID: 164,
    title:
      "An Efficient and Innovative Approach for Sentiment Analysis in Social Media Using Machine Learning Techniques",
    authors: [
      "Debajyoti Debnath",
      "SK Shamim Aktar",
      "Yagnyasenee Sen Gupta",
      "Saptarshi Chakraborty",
    ],
    correspondingAuthor: "Yagnyasenee Sen Gupta",
  },
];
export default acceptedPapers;
