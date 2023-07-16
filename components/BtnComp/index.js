import { BsWhatsapp } from 'react-icons/bs';

const BtnComp = ({ sowIcon, text, bg, border, color, font }) => {
  const styleObj = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    // backgroundColor: bg,
    background: bg,

    height: '55px',
    width: '100%',
    color: color,
    border: border,
    borderRadius: '3px',
    fontSize: font || '15px',
    fontWeight: 'bold',
  };
  return (
    <>
      <div style={styleObj}>
        {sowIcon ? (
          <span style={{ fontSize: '25px' }}>
            <BsWhatsapp />
          </span>
        ) : null}{' '}
        {text}
      </div>
    </>
  );
};

export default BtnComp;
