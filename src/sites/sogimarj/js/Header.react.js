import React from 'react';

export default = React.createClass({
  render() {
    return (
      <header className="clearfix">
      	<div className="container">
      		<a href="/" id="logo" title="SOGIMA-RJ - Ir para a página inicial">SOGIMA-RJ</a>
      		<p><span>Interatividade em</span> Educação Médica Continuada</p>
      		<ul>
      			<li><a href="/" className="bt01">Área do aluno</a></li>
      			<li><a href="/" className="bt01">Área do associado</a></li>
      		</ul>
      	</div>
      </header>
    );
  }
});
