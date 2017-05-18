/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  /**
   * `HomeController.render()`
   */
  render: function (req, res) {
    return res.redirect('/dashboard2');
  }
};

