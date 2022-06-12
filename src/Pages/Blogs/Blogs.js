import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='my-3'>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> <h4>1. Difference between 'javascript' and 'nodejs'.</h4> </Accordion.Header>
                    <Accordion.Body>
                        <table>
                            <thead>
                                <tr>
                                    <td>SL NO</td>
                                    <td>JAVA SCRIPT</td>
                                    <td>NODE JS</td>
                                </tr>
                            </thead>
                            <tr>
                                <td className='sl-no'>1.</td>
                                <td>Javascript is a high-level programming language used to create web scripts.</td>
                                <td>NodeJS is a Javascript runtime environment.</td>
                            </tr>
                            <tr>
                                <td className='sl-no'>2.</td>
                                <td>Javascript can only be run in the browsers.</td>
                                <td>With the help of NodeJS, Javascript can run outside the browser.</td>
                            </tr>
                            <tr>
                                <td className='sl-no'>3.</td>
                                <td>It is usually used on the client-side.</td>
                                <td>It is usually used on the server-side.</td>
                            </tr>
                            <tr>
                                <td className='sl-no'>4.</td>
                                <td>Javascript is capable to add HTML and can manipulate DOM.</td>
                                <td>Nodejs does not have capability to add HTML tags.</td>
                            </tr>
                            <tr>
                                <td className='sl-no'>5.</td>
                                <td>Javascript can run in any browser engine.</td>
                                <td>V8 is the Javascript engine inside of node.js that parses and runs Javascript.</td>
                            </tr>
                            <tr>
                                <td className='sl-no'>6.</td>
                                <td>Javascript is used to create front end web application or client-side development.</td>
                                <td>Node.js is used on the back end/server-side development.</td>
                            </tr>
                            <tr>
                                <td className='sl-no'>7.</td>
                                <td>Some of the javascript frameworks are RamdaJS, TypedJS etc.</td>
                                <td>Some of the Nodejs modules are Lodash, express etc. </td>
                            </tr>
                        </table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> <h4>2. When should you use 'nodejs' and when should you use 'mongodb'?</h4> </Accordion.Header>
                    <Accordion.Body>
                        <table>
                            <thead>
                                <tr>
                                    <td>When should we use 'NodeJS'?</td>
                                    <td>When should we use 'MongoDB'?</td>
                                </tr>
                            </thead>
                            <tr>
                                <td>Nodejs is a tool for the Javascript programming language that can compile and/or interpret the code. It is a well-known runtime environment that assists in executing JavaScript code outside the browser.
                                    If we want to write some kind of stand-alone program on server-side in Javascript, then we can choose to use nodejs for it.</td>
                                <td>MongoDB is a widely used NoSQL database i.e non-relational database. It offers scalability, high performance, reliability and flexibility. The ability to store data in several formats makes MongoDB a beneficial tool for managing large amounts of data.
                                    If our application needs the ability to persistently store data in a way that we can efficiently query, delete or update it later, then we would use database like MongoDB that makes the data available at all times.</td>
                            </tr>

                        </table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> <h4>3. Differences between 'sql' and 'nosql' databases.</h4> </Accordion.Header>
                    <Accordion.Body>
                        <table>
                            <thead>
                                <tr>
                                    <td>SL NO</td>
                                    <td>SQL</td>
                                    <td>NoSQL</td>
                                </tr>
                            </thead>
                            <tr>
                                <td className='sl-no'>1.</td>
                                <td>SQL- Structured Query Language.</td>
                                <td>NoSQL- Non Structured Query Language.</td>
                            </tr>
                            <tr>
                                <td className='sl-no'>2.</td>
                                <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                                <td>Non-relational or distributed database system.</td>
                            </tr>
                            <tr>
                                <td className='sl-no'>3.</td>
                                <td>These databases have fixed or static or predefined schema.</td>
                                <td>They have dynamic schema.</td>
                            </tr>
                            <tr>
                                <td className='sl-no'>4.</td>
                                <td>These databases are not suited for hierarchical data storage.</td>
                                <td>These databases are best suited for hierarchical data storage.</td>
                            </tr>
                            <tr>
                                <td className='sl-no'>5.</td>
                                <td>These databases are best suited for complex queries.</td>
                                <td>These databases are not so good for complex queries.</td>
                            </tr>
                            <tr>
                                <td className='sl-no'>6.</td>
                                <td>SQL databases are table-based.</td>
                                <td>NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores.</td>
                            </tr>
                            <tr>
                                <td className='sl-no'>7.</td>
                                <td>Vertically Scalable.</td>
                                <td>Horizontally scalable.</td>
                            </tr>
                            <tr>
                                <td className='sl-no'>8.</td>
                                <td>Follows ACID (Atomicity, Consistency, Isolation and Durability) property.</td>
                                <td>Follows CAP (Consistency, Availability, Partition tolerance) property.</td>
                            </tr>
                            <tr>
                                <td className='sl-no'>9.</td>
                                <td>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc.</td>
                                <td>Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc.</td>
                            </tr>
                        </table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header> <h4>4. What is the purpose of 'jwt' and how does it work?</h4> </Accordion.Header>
                    <Accordion.Body>
                        <table>
                            <thead>
                                <tr>
                                    <td>The purposes of 'JWT'</td>
                                    <td>How does it work?</td>
                                </tr>
                            </thead>
                            <tr>
                                <td>JWT or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. This information can be verified and trusted because it is digitally signed. Each JWT contains encoded JSON objects, including a set of claims.
                                    JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. JWT is a stateless authentication mechanism as the user state is never saved in the database. It protects against CSRF (Cross Site Request Forgery) attacks. <br />

                                    JWTs are mainly used for authentication. After a user signs in to an application, the application then assigns JWT to that user. Subsequent requests by the user will include the assigned JWT. This token tells the server what routes, services and resources the user is allowed to access. <br />

                                    JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed using public/private key pairs—you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with.
                                </td>
                                <td>1. The application or client requests authorization to the authorization server. This is performed through one of the different authorization flows. <br />
                                    2. When the authorization is granted, the authorization server returns an access token to the application. <br />
                                    3. The application uses the access token to access a protected resource (like an API).</td>
                            </tr>
                        </table>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;