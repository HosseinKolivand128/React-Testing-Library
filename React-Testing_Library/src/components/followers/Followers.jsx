import FollowersList from '../followersList/FollowersList'
import Header from '../header/Header'
import "./followers.css"

export default function Followers() {
    return (
        <div className="followers">
            <Header title="Followers" />
            <FollowersList />
        </div>
    )
}