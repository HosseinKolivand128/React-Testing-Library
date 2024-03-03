import React, { useEffect, useState } from 'react'
import "./followersList.css"
import { Link } from 'react-router-dom';
import axios from "axios"
export default function FollowersList() {

    const [followers, setFollowers] = useState([]);

    useEffect(() => {

        const fetchFollowers = async () => {
            const  {data}  = await axios.get("https://randomuser.me/api/?results=5")
            // const data=await response.json()
            // console.log(data);
            setFollowers(data.results)
        }

        fetchFollowers()
    }, []);



    return (
        <div className="followerslist-container">
            <div>
                {followers.map((follower, index) => (
                    <div key={index} className="follower-item" data-testid={`follower-item-${index}`}>
                        <img src={follower.picture.large}/>
                        <div className="followers-details">
                            <div className="follower-item-name">
                                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
                            </div>
                            <p>{follower.login.username}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="todo-footer">
                <Link to="/">Go Back</Link>
            </div>
        </div>
    )
}