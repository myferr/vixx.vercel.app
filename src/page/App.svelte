<script>
  import Layout from "../layout/Layout.svelte";
  import "./social-icons.scss";

  import Discord from "./assets/Discord.png";
  import Twitch from "./assets/Twitch.png";
</script>

<div id="background" />

<Layout>
  <div id="content-container">
    <div id="content">
      <img
        src="https://cdn.discordapp.com/avatars/1092386075877593179/02e3bae529240b1768ad668baf98ee9a.webp?size=1024&format=webp&width=0&height=460"
        alt="User Avatar"
        class="avatar"
        width="100px"
        height="100px"
      />
      <h2>Vix</h2>
      <div class="social-icon-wrapper">
        <div class="social-icon-container">
          <a href="https://www.twitch.tv/captainwazza" target="_blank">
            <img
              src={Twitch}
              width={18}
              height={20}
              alt="X"
              class="social-icon with-push"
            />
          </a>
          <a
            href="https://discord.com/users/1092386075877593179"
            target="_blank"
          >
            <img
              src={Discord}
              width={25}
              height={20}
              alt="Discord"
              class="social-icon with-push"
            />
          </a>
        </div>
      </div>
    </div>
    <a class="credit" href="https://myferr.foo.ng" target="_blank"
      >created by myferr</a
    >
  </div>
</Layout>
