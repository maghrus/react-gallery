function ButoaneControl({onPrev, onNext, onRandom, onShuffle}){
    return<>
    <div>
        <button onClick={onPrev}>Precedenta</button>
        <button onClick={onNext}>Urmatoarea</button>
        <button onClick={onRandom}>Imagine Aleatoare</button>
        <button onClick={onShuffle}>Aranjare Aleatoare</button>
    </div>
    </>
}

export default ButoaneControl;