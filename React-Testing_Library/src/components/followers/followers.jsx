import FollowersList from '../followersList/followersList'
import Header from '../header/header'
import "./followers.css"

export default function Followers() {
    return (
        <div className="followers">
            <Header title="Followers" />
            <FollowersList />
        </div>
    )
}