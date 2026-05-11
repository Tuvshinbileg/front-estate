import Icon from './Icon';

export default function AIValuation({
  value = 412000000,
  low = 395,
  high = 428,
  confidence = 4,
  sample = 1247,
}) {
  return (
    <div className="etai">
      <div className="etai-head">
        <Icon name="sparkles" size={16} />
        <span>Etoono AI · estimated value</span>
      </div>
      <div className="etai-value">
        <span className="etai-num">{value.toLocaleString()}</span>
        <span className="etai-cur">₮</span>
      </div>
      <div className="etai-conf">
        Confidence <b>±{confidence}%</b> · range {low}M – {high}M ₮
      </div>
      <div className="etai-bar">
        <i style={{ width: `${100 - confidence * 8}%` }} />
      </div>
      <div className="etai-meta">
        <span>Based on {sample.toLocaleString()} nearby sales</span>
        <span>Updated 2h ago</span>
      </div>
    </div>
  );
}
