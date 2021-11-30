import React, {useState,useEffect} from "react";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import './Main.css'

const Torrents = () => {
    const [torrents,setTorrents] = useState([]);
    const [params,setParams] = useState(useLocation().search);
    
    useEffect(() => {
        const searchParams = new URLSearchParams(params);
        fetch(`https://periculum.herokuapp.com/search?` + searchParams.toString())
        .then(res => res.json())
        .then(res => {
            setTorrents(res)            
        }).catch(err => console.error(err));
    }, [params]);


    return (
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
            <Form style={{ display: 'flex', marginBottom: '10px',width:'80%',alignSelf:'center'}} action="/search" method="get">
                <Form.Control type="search" name="search" placeholder="search the internet" />
                <Button style={{ height: '39px', backgroundColor:'grey', border:'none',marginLeft:'10px' }} type="submit">Search</Button>
            </Form>
            <Form >
            <div className="butttons">
                <Button onClick={()=>setParams("?search=movies")} style={{backgroundColor:'black',border:'none',backgroundColor:'#141414'}}>Movies</Button>
                <Button onClick={()=>setParams("?search=tv")} style={{backgroundColor:'black',border:'none',backgroundColor:'#141414'}}>OTT series</Button>
                <Button onClick={()=>setParams("?search=games")} style={{backgroundColor:'black',border:'none',backgroundColor:'#141414'}}>Games</Button>
                <Button onClick={()=>setParams("?search=anime")} style={{backgroundColor:'black',border:'none',backgroundColor:'#141414'}}>Anime</Button>
                <Button onClick={()=>setParams("?search=audio")} style={{backgroundColor:'black',border:'none',backgroundColor:'#141414'}}>Audio</Button>
                <Button onClick={()=>setParams("?search=apps")} style={{backgroundColor:'black',border:'none',backgroundColor:'#141414'}}>Software</Button>
                <Button onClick={()=>setParams("?search=xxx")} style={{backgroundColor:'black',border:'none',backgroundColor:'#141414'}}>Dopa stuff(nsfw)</Button>
            </div>
            </Form>
            <div className="torrents">
            {     
                torrents.map((itr,i) => (
                    
                    <div className="torrent">
                        
                        <p className="torrent-name">{itr.Name}</p>
                        <div className="torrent-info">
                            <p className="torrent-seeders">Seeders:{itr.Seeders}</p>
                            <p className="torrent-leechers">Leechers:{itr.Leechers}</p>
                        </div>
                        
                        
                        <Button href={itr.Magnet} style={{backgroundColor:'black',border:'none'}} className="torrent-magnet">Magnet</Button>
                    </div>
                    
                ))
            } 
            </div>       
            {/*<Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Source</th>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Seeders</th>
                        <th>Leechers</th>
                        <th>Magnet Link</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        torrents.map((itr,i) => (
                            <tr>
                                <td>{i + 1}</td>
                                <td>{itr.Source}</td>
                                <td><a href={itr.Link}>{itr.Name}</a></td>
                                <td>{itr.Size}</td>
                                <td>{itr.Seeders}</td>
                                <td>{itr.Leechers}</td>
                                <td><a href={itr.Magnet}>Magnet</a></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
                */}
        </div>
    );
}


export default Torrents;