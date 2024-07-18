const errorHandler = (req, res) => {

    res.send(
        `<div>
      <h1 style="text-align: center; color : red;" >404 Not Found!!!</h1>
      </div>`
    )

}
export {
    errorHandler
}