export default function LeveleScreen (props) {
const level = props.level;
    return (
        <div className="row">
            <div className="col-12 text-center">
                <img 
                className="img-fluid"
                src={ `./assets/${level}.png` }
                 alt="nivel"  />
            </div>
        </div>
    )
    
}