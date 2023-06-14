import { Link, useLocation } from "react-router-dom";
import { useClipboard } from "use-clipboard-copy";
import { useState } from "react";
import "./style.css";

const MemeGenerated = () => {
  const [copied, setCopied] = useState(false);
  const location = useLocation();
  const clipboard = useClipboard();
  const url = new URLSearchParams(location.search).get("url");

  const copyLink = () => {
    clipboard.copy(url);
    setCopied(true);
  };

  return (
    <div className="box">
      <button className="goback">
        <Link to="/" className="back">
          Go Back
        </Link>
      </button>
      {url && <img className="image" alt="meme" src={url} />}
      <button className="copy" onClick={copyLink}>
        {copied ? "Link Copied!" : "Copy Link"}
      </button>
      <div className="share">
        <h4>Copy & Share</h4>
        <div>
          <a href="https://web.whatsapp.com/">
            <img
              className="social"
              src="https://img.icons8.com/color/324/whatsapp--v6.png"
              alt="whatsapp--v6"
            />
          </a>
          <a href="https://www.instagram.com/">
            <img
              className="social"
              src="https://img.icons8.com/color/48/instagram-new--v1.png"
              alt="instagram-new--v1"
            />
          </a>
          <a href="https://www.facebook.com/">
            <img
              className="social"
              src="https://img.icons8.com/color/48/facebook.png"
              alt="facebook"
            />
          </a>
          <a href="https://www.linkedin.com/">
            <img
              className="social"
              src="https://img.icons8.com/color/48/linkedin.png"
              alt="linkedin"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default MemeGenerated;
