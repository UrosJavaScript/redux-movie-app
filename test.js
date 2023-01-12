function uzmiRating(){
    var ratings = [
        {Source: 'Internet Movie Database', Value: '6.2/10'},
        {Source: 'Rotten Tomatoes', Value: '28%'},
        {Source: 'Metacritic', Value: '42/100'}
    ];
    
    return ratings.map(e => e.Value);
}

console.log(typeof uzmiRating());