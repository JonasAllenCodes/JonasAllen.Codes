import removeHTML from "./removeHTML";
import readingTime from "reading-time";

export default function (content) {
    return readingTime(removeHTML(content));
}