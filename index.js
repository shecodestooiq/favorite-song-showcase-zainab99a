function displaySongInfo() {
    const inputName = document.getElementById('song_name').value;
    const inputLink = document.getElementById('link').value;
    const inputdescription = document.getElementById('description').value;
    const inputYear = document.getElementById('year').value;

    //to convert the link to embeded format
    const embededFormat=inputLink.replace('/watch?v=', '/embed/')

    document.getElementById('songName').innerText = inputName;
            document.getElementById('descriptionText').innerText = inputdescription;
            document.getElementById('date').innerText = inputYear;
            document.getElementById('songLink').innerHTML = embededFormat;
            document.getElementById("youtube").src = embededFormat;
            
            document.getElementById('formarea').style.display = 'none';
            document.getElementById('display_area').style.display = 'block';

           
}
module.exports = {
    displaySongInfo: displaySongInfo,
}