import React from "react";
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

export default function QuillEditor(props) {
    const { quill, quillRef } = useQuill();
    console.log(quill);    
    console.log(quillRef);
    return (
        <div className="quill_text_editor" style={{ width: '100%', height: 300 }}>
            <div ref={quillRef} />
        </div>
    )
}

/* Example:  <QuillEditor id="page_content_html">html Content here...</QuillEditor>*/
