import React from 'react';
import Particles from '@tsparticles/react';

function Newparticles() {
    const options = {
        particles: {
            number: {
                value: 8,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            lineLinked: { // Update casing if required for compatibility
                enable: false
            },
            move: {
                speed: 1,
                outMode: "out"
            },
            shape: {
                type: ["image", "circle"],
                image: [
                    {
                        src: "/R.png",
                        height: 20,
                        width: 23
                    },
                    {
                        src: "/html.jpg",
                        height: 20,
                        width: 20
                    },
                    {
                        src: "/css.png",
                        height: 20,
                        width: 20
                    }
                ]
            },
            color: {
                value: "#CCC"
            },
            size: {
                value: 30,
                random: false,
                anim: {
                    enable: true,
                    speed: 4,
                    size_min: 10,
                    sync: false
                }
            }
        },
        retina_detect: false
    };

    return <Particles options={options} />;
}

export default Newparticles;
