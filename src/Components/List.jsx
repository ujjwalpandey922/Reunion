import { useInfoContext } from "../context/InfoContext";
import "./list.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const List = () => {
  const { info } = useInfoContext();
  console.log(info);
  return info.length !== 0 ? (
    <div className="cardContext">
      {info.map((e) => (
        <Card sx={{ width: 345 }} className="card" key={e.id}>
          <CardMedia
            sx={{ height: 140 }}
            image={e.image}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {e.address}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {e.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Book Now</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  ) : (
    <h1>No Results Found</h1>
  );
};

export default List;
