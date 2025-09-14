import './Tool.css'

export default function Tool (tool) {
    return (
        <p id='tool' style={{ backgroundColor:tool.colour}}>{tool.name}</p>
    )
}