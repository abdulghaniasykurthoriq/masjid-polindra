const ChooseColor = ({ warna, color, onClick }) => {
    return (
        <div
            style={{ backgroundColor: color }}
            // onClick={() => setWarna('red')}
            onClick={onClick}
            className={`${
                warna === color ? 'border-4 border-black' : ''
            }  w-10 h-10 rounded-full`}
        ></div>
    );
};

export default ChooseColor;
