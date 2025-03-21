function Miniaturi({images, selectedIndex, onSelect}){
    return<>
    <div className="pozeMici">
        {images.map((image, index) => (
            <img
            key = {image.id}
            src = {image.url}
            alt = {image.title}
            style={{
                width: '50px',
                height: 'auto',
                border: index === selectedIndex ? '2px solid red' : '2px solid transparent'
            }}
            onClick={() => onSelect(index)}
            ></img>
        ))}
    </div>
    </>
}

export default Miniaturi;