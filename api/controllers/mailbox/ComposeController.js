/**
 * Mailbox/ComposeController
 *
 * @description :: Server-side logic for managing mailbox/composes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  /**
   * `Mailbox/MailboxControllerController.render()`
   */
  render: function (req, res) {
    return res.view('mailbox/compose', {
      showMailboxTreeview: true
    });
  }
};

