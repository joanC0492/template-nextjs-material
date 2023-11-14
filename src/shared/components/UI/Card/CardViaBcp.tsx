import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export const CardViaBcp = () => {
  return (
    <Card className="p-2 shadow-lg cursor-pointer relative transition-all duration-300 hover:scale-110 hover:shadow-xl">
      <CardContent className="pb-1 pt-2">
        <div></div>
      </CardContent>
      <CardActions>
        <p className="text-base leading-5 md:text-lg text-bcp-blue-2 md:leading-6 min-h-[48px]"></p>
      </CardActions>
    </Card>
  );
};
