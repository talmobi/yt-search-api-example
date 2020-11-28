const express = require( 'express' )

const app = express()
const port = 7171

const yts = require( 'yt-search' )

app.get( '/api/:search', async function ( req, res ) {
  try {
    const r = await yts( req.params.search )

    res.send(
      r.videos.reduce( function ( acc, video ) { return acc + `<li>${ video.title }</li>` }, '' )
    )
  } catch ( e ) {
    res.send( e )
  }
} )

app.listen( port, function () {
  console.log( `Example app listening at http://localhost:${ port }` )
} )
