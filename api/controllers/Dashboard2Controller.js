/**
 * Dashboardv2Controller
 *
 * @description :: Server-side logic for managing dashboardv2s
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  /**
   * `Dashboardv2Controller.render()`
   */
  render: function (req, res) {
    return res.view('dashboard/v2');
  }
};

