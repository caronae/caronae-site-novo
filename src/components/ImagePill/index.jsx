import './styles.css';

export default function ImagePill({ width, height, src }) {
  return (
    <div
      className="image-pill"
      style={{
        width: `${width}`,
        height: `${height}`,
        borderRadius: `${height}`
      }}
    >
      <img
        src={src}
        style={{
          width: `${width}`
        }}
      />
    </div>
  );
}
