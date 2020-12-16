import React from 'react'
import './Team.css'
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';


export default function Team() {

    const musk = ['React Js', 'Node Js', 'Firebase']

    const ms = musk.map((value) => {
        return <li>{value}</li>
    })
    return (
        <div>
            <div className="background-1" id="team">
                <div className="paragraph">Our Team</div>


                <div>
                    <Card className="card-elon" >
                        <CardContent className="gradient" backgroundColor="red">
                            <div className="photo1"  style={{fontSize : "60px"}} />
                            <Typography>
                                <h2>Elon Musk</h2>
                                <h3>Skills : </h3>
                                {ms}
                            </Typography>
                        </CardContent>
                    </Card >
                </div>

                <div>
                    <Card className="card-mark" >
                        <CardContent className="gradient">
                            <div className="photo2" />
                            <Typography>
                                <h2>Mark Zuckeberg</h2>
                                <h3>Skills : </h3>
                                {ms}
                            </Typography>
                        </CardContent>
                    </Card >
                </div>

                <div>
                    <Card className="card-clever" >
                        <CardContent className="gradient">
                            <div className="photo3" />
                            <Typography>
                                <h2>Clever Qazi</h2>
                                <h3>Skills : </h3>
                                {ms}
                            </Typography>
                        </CardContent>
                    </Card >
                </div>

                <div>
                    <Card className="card-mina" >
                        <CardContent className="gradient">
                            <div style={{fontSize : 70}} className="photo4" />
                            <Typography>
                                <h2>Mina</h2>
                                <h3>Skills : </h3>
                                {ms}
                            </Typography>
                        </CardContent>
                        <IconButton className="icon" aria-label="add to favorites">
                            <FavoriteIcon style={{ color: "red" }} />
                        </IconButton>
                    </Card >
                </div>

                <div className="image"></div>
            </div>
        </div>

    )
}
