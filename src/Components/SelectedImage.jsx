function SelectedImage({image}){
    if (!image) return null;

    return<>
    <div className="rezultat">
        <img className="imagineRezultat" src={image.url} alt={image.title}/>
        <p>{image.title}</p>
    </div>
    </>
}

export default SelectedImage;