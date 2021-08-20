import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

HomeFeature.propTypes = {

};

function HomeFeature(props) {

    const user = useSelector(state => state.user.current)
    const isLogin = !!user.username
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Home</h1>
            {!isLogin && (<>
                <div style={{ textAlign: "center" }}>
                    <Link to="auth/login">login</Link>
                </div>
                <div style={{ textAlign: "center" }}>
                    <Link to="auth/register">register</Link>
                </div>
            </>)}

            {isLogin && (<>
                <h2 style={{ textAlign: "center" }}>Hello {user.username}</h2>
            </>)}

        </div>
    );
}

export default HomeFeature;