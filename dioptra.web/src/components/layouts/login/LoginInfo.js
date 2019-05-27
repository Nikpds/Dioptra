import React from 'react'
import { Col, Typography, Row } from 'antd'
import LoginForm from './LoginForm'
const LoginInfo = () => {
  return (
    <div style={{ height: 'calc(100vh - 80px)' }}>
      <Row
        type="flex"
        justify="space-around"
        align="middle"
        className="login-content-background"
        style={{ height: 'calc(100vh - 140px)' }}>
        <Col span={10}>
          <Typography.Paragraph
            strong
            style={{ textAlign: 'justify', color: 'lightgrey' }}>
            <Typography.Title underline={true} style={{ color: 'white' }}>
              Προειδοποίηση
            </Typography.Title>
            Το παρόν σύστημα και όλα τα υποσυστήματα που έχουν σχέση ή απορρέουν
            από αυτό είναι σχεδιασμένα σύμφωνα με εθνικά και ΝΑΤΟικά πρότυπα που
            αναφέρονται σε διαβαθμισμένα έγγραφα και είναι διαβαθμισμένο ως{' '}
            <Typography.Text strong style={{ color: 'red' }}>
              ΑΠΟΡΡΗΤΟ
            </Typography.Text>
          </Typography.Paragraph>
          <Typography.Paragraph
            strong
            style={{ textAlign: 'justify', color: 'lightgrey' }}>
            Χρήση του συστήματος και των πόρων του επιτρέπεται μόνο για
            επιχειρησιακούς λόγους και μόνο σε εξουσιοδοτημένο προσωπικό με την
            ανωτέρω διαβάθμιση. Με τη σύνδεση η/και χρήση του συστήματος και του
            API του, διαβεβαιώνετε και αποδέχεστε ότι:
            <ul style={{ marginLeft: 20, marginTop: 10 }}>
              <li>Είστε ενεργό προσωπικό των Ελληνικών Ενόπλων Δυνάμεων</li>
              <li>
                Η διαβάθμιση που κατέχετε είναι ίση ή μεγαλύτερη από την
                διαβάθμιση του συστήματος
              </li>
              <li>
                Η χρήση του συστήματος αποτελεί μέρος των καθηκόντων της θέσης
                που κατέχετε
              </li>
            </ul>
          </Typography.Paragraph>
        </Col>
        <Col span={8}>
          <LoginForm />
        </Col>
      </Row>
      <Row
        className="login-header-background"
        style={{ height: '80px' }}
        type="flex"
        justify="space-around"
        align="middle">
        <Col span={10}>
          <Typography.Paragraph style={{ color: 'lightgrey' }}>
            Copyright © 2015-2018, ΚΜΗ/ΓΕΑ
          </Typography.Paragraph>
        </Col>
        <Col span={10}>
          <Typography.Paragraph style={{ color: 'lightgrey', float: 'right' }}>
            Έκδοση: 2.2.0
          </Typography.Paragraph>
        </Col>
      </Row>
    </div>
  )
}

export default LoginInfo
