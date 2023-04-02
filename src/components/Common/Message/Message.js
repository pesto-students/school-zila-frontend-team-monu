import React from "react";
import "./Message.css";

export default function Message({senderName, inClass}) {
    // const {senderName, inClass} = props;
  return (
    <div>
        <div className="common-messages">
        <div className="common-messages-sub">
          <div>{senderName}</div>
          <div>{inClass}</div>
        </div>
      <svg
        width="30"
        height="30"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1.00012"
          width="46"
          height="46"
          rx="23"
          fill="white"
          stroke="#A098AE"
          stroke-width="2"
        />
        <path
          d="M32 16.0001H16C15.2044 16.0001 14.4413 16.3162 13.8787 16.8788C13.3161 17.4414 13 18.2045 13 19.0001V29.0001C13 29.7958 13.3161 30.5588 13.8787 31.1214C14.4413 31.684 15.2044 32.0001 16 32.0001H32C32.7956 32.0001 33.5587 31.684 34.1213 31.1214C34.6839 30.5588 35 29.7958 35 29.0001V19.0001C35 18.2045 34.6839 17.4414 34.1213 16.8788C33.5587 16.3162 32.7956 16.0001 32 16.0001ZM33 28.7501L28.1 24.3501L33 20.9201V28.7501ZM15 20.9201L19.9 24.3501L15 28.7501V20.9201ZM21.58 25.5301L23.43 26.8201C23.5974 26.9362 23.7963 26.9985 24 26.9985C24.2037 26.9985 24.4026 26.9362 24.57 26.8201L26.42 25.5301L31.42 30.0001H16.6L21.58 25.5301ZM16 18.0001H32C32.1857 18.0016 32.3673 18.0548 32.5245 18.1537C32.6817 18.2526 32.8083 18.3933 32.89 18.5601L24 24.7801L15.11 18.5601C15.1917 18.3933 15.3183 18.2526 15.4755 18.1537C15.6326 18.0548 15.8143 18.0016 16 18.0001Z"
          fill="#A098AE"
        />
      </svg>
      </div>
    </div>
  );
}