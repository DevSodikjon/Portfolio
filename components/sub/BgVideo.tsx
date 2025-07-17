import React from 'react'

const BgVideo = () => {
    return (
        <div>
            <video
                autoPlay
                muted
                loop
                className="rotate-180 absolute top-[-390px]  h-full w-full left-0 z-[1] object-cover "
            >
                <source src="/blackhole.webm" type="video/webm" />
            </video>
        </div>
    )
}

export default BgVideo
