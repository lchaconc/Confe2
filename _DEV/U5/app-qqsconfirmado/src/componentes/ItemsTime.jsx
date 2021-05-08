import Countdown from "react-countdown";
const Finished = () => <span>Fin de tiempo</span>;

export default function ItemsTime(props) {
  console.log("props.chk", props.chk);

  const renderer = ({ seconds, completed }) => {
    if (completed) {
      props.handleTimeOver(completed);
      return <Finished />;
    } else {
      return <span>{seconds} </span>;
    }
  };

  return (    
    <Countdown date={Date.now() + props.delay} renderer={renderer} />
  );
}
