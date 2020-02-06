import typescript from '../src'

(async () => {
  const res = await typescript({
    text: 'example',
  })
  console.log(res)
})()