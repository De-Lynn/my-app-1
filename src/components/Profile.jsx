const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
            </div>
            <div>
                avatar + description
                <img className='avatar' src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' />
            </div>
            <div>
                My posts
                <div>
                    new post
                </div>
                <div>
                    All posts
                    <div>
                    post 1
                    </div>
                    <div>
                    post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;