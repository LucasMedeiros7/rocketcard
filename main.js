$("form").submit(false);
const input = $("input");

$("button").click(() => {
  if (input.val() == "") {
    return alert("Insira um nome de usuário");
  }
  $.ajax({
    url: `https://api.github.com/users/${input.val()}`,
    success(resposta) {
      const nome = resposta.name;
      const seguindo = resposta.following;
      const seguidores = resposta.followers;
      const pfp = resposta.avatar_url;
      const repositorio = resposta.public_repos;
      const localizacao = resposta.location;

      $("#nome").html(nome);
      $("#repositorio").html(repositorio);
      $("#seguidores").html(seguidores);
      $("#seguindo").html(seguindo);
      $("#localizacao").html(localizacao);
      $("#img").attr("src", pfp);
    },
  });
});
