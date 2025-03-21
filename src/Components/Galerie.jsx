import dateImagini from '../data/images.json'
import { useState } from 'react';
import Miniaturi from './Miniaturi';
import SelectedImage from './SelectedImage';
import ButoaneControl from './ButoaneControl';

function Galerie(){
    const [images, setImages] = useState(dateImagini);

    const [selectedIndex, setSelectedIndex] = useState();

    const handleNext = () => {
        if(selectedIndex < images.length - 1){
            setSelectedIndex(selectedIndex + 1)
        }
    }

    const handlePrev = () => {
        if(selectedIndex > 0){
            setSelectedIndex(selectedIndex - 1)
        }
    }

    const handleRandom = () => {
        const randomIndex = Math.floor(Math.random() * images.length);
        setSelectedIndex(randomIndex);
    }

    const handleShuffle = () => {
        const shuffled = [...images].sort(() => Math.random() - 0.5);
        setImages(shuffled)
    }

    return<>
    <ButoaneControl 
        onPrev={handlePrev}
        onNext={handleNext}
        onRandom={handleRandom}
        onShuffle={handleShuffle}
    />
    <Miniaturi images={images} selectedIndex={selectedIndex} onSelect={setSelectedIndex}/>
    <SelectedImage image={images[selectedIndex]}/>
    </>
}

export default Galerie;