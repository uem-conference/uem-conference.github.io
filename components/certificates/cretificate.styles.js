import { StyleMaster } from "style-master";

const certificateStyles = new StyleMaster();

// certificateStyles.addClassRule(".certificate", { "background-color": "red" });

const styles = new StyleMaster();

styles.addClassRule(".para", { "background-color": "green" });

const expObj = { certificateStyles, styles };
export default expObj;
