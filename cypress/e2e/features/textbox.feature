Feature: TextBox

  Scenario: Input textbox
    Given Navigate to demo.qa textbox
    When input demo qa textbox
      | username   | email                  | currentAddress | permanentAddress |
      | bluelidass | bluelidass@yopmail.com | ID             | BLG, ID          |
    Then show result message contains "Name:bluelidass"
    Then show result message contains "Email:bluelidass@yopmail.com"
    Then show result message contains "Current Address :ID"
    Then show result message contains "Permananet Address :BLG, ID"