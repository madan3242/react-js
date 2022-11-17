import React, { useState} from 'react'

const SearchApp = () => {
    const [profileData] = useState([
        {
            name: "Brian Kernighan",
            email: "brian@test.com",
            password: "password1",
            skills: ["AWK", "AMPL", "Unix"]
        },
        {
            name: "Max Kanat-Alexander",
            email: "max@test.com",
            password: "password1",
            skills: ["Java", "Perl", "Apache", "Python"]
        },
        {
            name: "Spruce Emmanuel",
            email: "new@test.com",
            password: "password1",
            skills: ["JavaScript", "Perl", "Apache", "Node.js"]
        }
    ]);
    const [q, setQ] = useState("");
    const [searchTerm] = useState(["email", "name"]);

    function search(items){
        return items.filter((item) => {
            return searchTerm.some((newItem) => {
                return(
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
            });
        });
    }
    return (
        <div className="contaier">
            <div className="row">
                <div className="col-lg-5">
                    <div>
                        <h2>Profiles</h2>
                        <div>
                            <input type="text" 
                                placeholder="search" 
                                value={q}
                                onChange={(e) => setQ(e.target.value)} 
                            />

                            {
                                search(profileData).map((val, key) => {
                                    return (
                                        <div key={key}>
                                            <p>{val.name}</p>
                                            <p>{val.email}</p>
                                            {
                                                val.skills.map((skill) => {
                                                    return <p>{skill}</p>
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchApp