import HookGitHub from "./HookGitHub";

const ModalDetails = () => {
    const user = HookGitHub();
    return (
        <>
      <div id="modalContainer">
      <div className="modalDiv">
        <img src= {user.avatar_url} width="100%" alt={user.name} title={user.name} className="photo"/>
      </div>
      <div className="modalDiv2">
        <i className="bi bi-person"><span className="linkText"> {user.name} </span></i>
        <hr className="border border-light border-1 opacity-70 mb-2 mt-2"/>
        <i class="bi bi-geo-alt"><span className="linkText"> {user.location} </span></i>
        <hr className="border border-light border-1 opacity-70 mb-2 mt-2"/>
        <i class="bi bi-card-text"><span className="linkText"> {user.bio} </span></i>
        <hr className="border border-light border-1 opacity-70 mb-2 mt-2"/>
        <i class="bi bi-box"><span className="linkText"> Repositories: {user.public_repos}</span></i>
        <hr className="border border-light border-1 opacity-70 mb-2 mt-2"/>
        <i class="bi bi-suit-heart"><span className="linkText">  Followers: {user.followers} </span></i>
        <hr className="border border-light border-1 opacity-70 mb-2 mt-2"/>
        <i class="bi bi-suit-heart"><span className="linkText">  Following: {user.following} </span></i>
      </div>
      </div>
        
    </>
    )
};

export default ModalDetails;