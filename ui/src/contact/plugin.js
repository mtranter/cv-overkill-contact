export function configure(config){
  let container = config.container;
  //container.registerInstance('plugin.route',  { route: ['experience'],       name: 'experience',       moduleId: 'experience/index' })

  container.registerInstance('plugin.widget.homepage.component', {
    title:'Contact',
    href:'#contact',
    name:'contact',
    viewModel: 'contact/contact',
    view:'contact/contact.html'
  });
  //config.globalResources('./experience')
}
