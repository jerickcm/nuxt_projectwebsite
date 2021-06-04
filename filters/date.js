export default value =>{
  const date = new Date(value)
  return data.toLocaleString(['en-US'],{
      month: 'short',
      day:'2-digit',
      year:'numeric'
  })
}
