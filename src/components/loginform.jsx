export default function Loginform() {

  return(
    <>
    <h2 className="text-3xl">Login</h2>
    <form action="/send-data-here" method="post">
      <div className="form-group mb-6">
        
        <label className="form-label" htmlFor="first">First name:</label>
        <input className="form-control border border-solid border-gray-300 rounded" type="text" id="first" name="first" />
      </div>
      <div className="form-group mb-6">
        <label className="form-label" htmlFor="last">Last name:</label>
        <input className="form-control border border-solid border-gray-300 rounded" type="text" id="last" name="last" />
      </div>
      <button type="submit">Submit</button>
    </form>




    {/* <form onSubmit={handleSubmit(submitForm)}>
      <label htmlFor="username">Username</label>
      <input className={`${errors.username ? styles.isInvalid : styles.valid}`} placeholder="Thomas Aquinas" {...register("username")}  />
        <div className={`${errors.username ? styles.isInvalid : ''}`}>{errors.username?.message}</div>

      <label  htmlFor="password">Password</label>
      <input className={`${errors.password ? styles.isInvalid : styles.valid}`} placeholder="Hunter2" type="password" {...register("password")} />
        <div className={`${errors.password ? styles.isInvalid : ''}`}>{errors.password?.message}</div>
      <input className={styles.submit} type="submit" />
      {logErr && <span>{errMessage}</span>}
    </form> */}
    </>
  ) 
}