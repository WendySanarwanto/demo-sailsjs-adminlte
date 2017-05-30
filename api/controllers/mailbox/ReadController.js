/**
 * ReadController
 *
 * @description :: Server-side logic for managing Reads
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  /**
   * `Mailbox/MailboxControllerController.render()`
   */
  render: function (req, res) {
    return res.view('mailbox/read', {
      showMailboxTreeview: true
    });
  }
};

