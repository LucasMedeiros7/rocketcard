$('form').submit(false);
const input = $('input')

$('button').click(() => {
  if (input.val() == '') {
    return alert("Insira um nome de usuário")
  }

  $.ajax({
    url: `https://api.github.com/users/${input.val()}/following`,
    success(resposta){
      const seguindo = resposta.length
      $('#seguindo').html(seguindo)
    }
  })

  $.ajax({
    url: `https://api.github.com/users/${input.val()}/followers`,
    success(resposta){
      const seguidores = resposta.length
      $('#seguidores').html(seguidores)
    }
  })

  $.ajax({
    url: `https://api.github.com/users/${input.val()}`,
    success(resposta) {
      const nome = resposta.name
      const pfp = resposta.avatar_url
      const repositorio = resposta.public_repos
      const localizacao = resposta.location

      $('#nome').html(nome)
      $('#repositorio').html(repositorio)
      $('#localizacao').html(localizacao)
      $('#img').attr('src', pfp)
    }
  })
})