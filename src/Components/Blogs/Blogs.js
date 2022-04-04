import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div id="question-answer" className="text-center container py-5">
            <h4>What is Semantic tags?</h4>
            <p>Semantic tags are HTML that identifies the meaning of a web page rather than just the presentation. For example, a 'p' tag indicates that the bound text is a paragraph. This is both semantic and representational because people know what paragraphs are and how browsers need to display them. On the other hand, tags such as 'b' and 'i' are not semantic. They only define what the text should look like (bold or italic), and do not pay additional meaning.</p>
            <hr />
            <h4>Difference between inline, block, and inline-block elements</h4>
            <center>
                <table>
                    <tr className="text-center">
                        <th>inline</th>
                        <th>block</th>
                        <th>inline-block</th>
                    </tr>
                    <tr>
                        <td>1. Do not have other inner margins.</td>
                        <td>1. Block elements have adjustable outer and inner margins.</td>
                        <td>1. Inline-block elements have adjustable outer and inner margins.</td>
                    </tr>
                    <tr>
                        <td>2. Width = its content.</td>
                        <td>2. Take the width of their parent container.</td>
                        <td>2. Adjust their width to its contents.</td>
                    </tr>
                    <tr>
                        <td>3. Can be put side by side other elements.</td>
                        <td>3. Cannot be put side by side other elements.</td>
                        <td>3. Can be put side by side other elements.</td>
                    </tr>
                </table>
            </center>
        </div>
    );
};

export default Blogs;