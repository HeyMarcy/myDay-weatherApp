<form className="locationForm" onSubmit={this.handleSubmit} >
  <input type="text" className="city" placeholder="City"/>
  <input type="text" className="stateName" placeholder="State"/>
  <button type="submit" className="change-loc">Go</button>
  <p><small>For the time being, please us locations within the US.</small></p>
</form>