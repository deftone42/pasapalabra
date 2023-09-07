import React from 'react';
import styled from 'styled-components';

const SIZE = 400;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    z-index: -1;

    #video {
        border-radius: 50%;
    }

    /* To fully center it */
    position: absolute;
    left: 0;
    right: 0;
    top: 3rem;
    bottom: 0;
    margin: auto;
`;

function PlayerWebCam() {
    React.useEffect(() => {
        const video = document.getElementById('video');
        const errorMsgElement = document.querySelector('span#errorMsg');

        const constraints = {
            audio: false,
            video: {
                width: SIZE, height: SIZE
            }
        };

        // Access webcam
        async function init() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia(constraints);
                handleSuccess(stream);
            } catch (e) {
                errorMsgElement!.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
            }
        }

        // Success
        function handleSuccess(stream) {
            (window as any).stream = stream;
            (video as any).srcObject = stream;
        }

        // Load init
        init();
    }, []);
    return (
        <Container>
            <video id="video" playsInline autoPlay></video>
        </Container>
    );
};

export default PlayerWebCam;
