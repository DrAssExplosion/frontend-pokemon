export const NothingWasFound = () => {

  return (
    <div style={style.container}>
    </div>
  );
}
//https://fosstodon.b-cdn.net/media_attachments/files/005/303/500/original/d3550f2d87ee7a1d.png
const style = {
  container: {
    background: 'url(./assets/surprised-pikachu.png)',
    //background: 'url(https://fosstodon.b-cdn.net/media_attachments/files/005/303/500/original/d3550f2d87ee7a1d.png)',
    height: '500px',
    width: '500px',
    backgroundSize: 'contain',
    backgroundRepeatY: 'no-repeat',
  }
}